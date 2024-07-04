const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
const auth = require("../models/auth");



const SignupAuth = async (req, res, next) => {
  try {
    const { name, email, confirmpassword, password } = req.body;
    if (!name || !email || !confirmpassword || !password) {
      return res.status(400).send("Please fill all the fields");
    }
    const isUserExist = await Auth.findOne({ email });
    if (isUserExist) {
      return res.status(400).send("User already exists");
    }

    if (password !== confirmpassword) {
      return res.status(400).send("Password does not  match");
    }
    const hashPassword = (await bcrypt.hash(password, 10)) && (await bcrypt.hash(confirmpassword, 10));
    const newAuth = new Auth({
      name, email, confirmpassword: hashPassword, password: hashPassword
    });
    await newAuth.save();
    res.status(200).send("User registered successfully");
  } catch (error) {
    next(error);

  }
};
const LoginAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password, req.body);
    if (!email || !password) {
      return res.status(400).send("Please fill all the fields");
    }
    const auth = await Auth.findOne({ email });
    if (!auth) {
      return res.status(400).send("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, auth.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }
    // todo move secret to env
    const token = jwt.sign({ authId: auth._id }, process.env.Secret_key, {
      expiresIn: "240h",
    });
    res.status(200).json({
      token,
      authId: auth._id,
      name: auth.name,
      email: auth.email,
    });
  } catch (err) {
    next(err);
  }
};

const UpdatePassword = async (req, res, next) => {
  try {
    const { newpassword, confirmpassword, oldpassword } = req.body;
    if (!newpassword || !confirmpassword || !oldpassword) {
      return res.status(400).send("Please fill all the fields");
    }
    const auth = await Auth.findById(req.authId);
    if (!auth) {
      return res.status(401).send("Invalid Password");
    }
    const isOldPasswordValid = await bcrypt.compare(oldpassword, auth.password);
    if (!isOldPasswordValid) {
      return res.status(401).send("Invalid old password");
    }
    if (newpassword !== confirmpassword) {
      return res.status(400).send("Password does not  match");
    }
    const hashPassword = await bcrypt.hash(newpassword, 10);
    auth.password = hashPassword;
    await auth.save();
    res.status(200).send("Password updated successfully");
  }
  catch (error) {
    next(error);
  }
};

module.exports = { SignupAuth, LoginAuth, UpdatePassword };
