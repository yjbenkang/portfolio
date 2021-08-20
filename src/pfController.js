import { response } from "express";

export const homeController = (req, res) => {
    return res.render("index");
};

export const aboutController = (req, res) => {
    return res.send("About");
};

export const projectsController = (req, res) => {
    return res.send("Projects");
};

export const skillsController = (req, res) => {
    return res.send("Skills");
};

export const contactController = (req, res) => {
    return res.send("Contact");
};