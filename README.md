# Flask Web Note App

A simple web-based note-taking application built with **Flask** and **Bootstrap**. Users can register, log in, add personal notes, and view them securely.

---

## 🚀 Setup & Installation

### Prerequisites
- Python 3.8 or higher
- Git

### Steps

bash
# Clone the repository
git clone <repo-url>
cd <repo-folder>

# Install dependencies
pip install -r requirements.txt

##🏃‍♂️ Running The App

flask run

## 🔑 Default Login Credentials

You may need to manually create a user via the Sign Up page.

Default credentials -
email: def@gmail.com
password: def12345

## 🧭 App Overview

#Features

    ✅ User Registration & Authentication

    ✅ Flash messages for feedback

    ✅ Create and delete personal notes

    ✅ Responsive UI using Bootstrap

    ✅ Jinja2 templating for dynamic content

# Folder Structure

project-root/
├── static/             # JS and CSS (if any)
├── templates/          # HTML templates (base, login, signup, home, etc.)
├── main.py             # Flask app entry point
├── models.py           # Database models (optional if using SQLAlchemy)
├── requirements.txt    # Python dependencies
└── README.md           # This file

## 🧰 Libraries Used

    Flask — Python web framework

    Flask-Login — User session management

    Bootstrap — For responsive UI

    Jinja2 — Templating engine for Flask

    Flask SQLAlchemy (if used) — ORM for database interactions
