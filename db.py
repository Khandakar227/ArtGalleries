import sqlite3

DATABASE = 'database/artgalleries.db'

def init_db():
    con = sqlite3.connect(DATABASE)
    cursor = con.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS Users (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      name TEXT NOT NULL,
                      email TEXT NOT NULL UNIQUE,
                      business_name TEXT NOT NULL,
                      submission_date DATETIME DEFAULT CURRENT_TIMESTAMP)''')
    con.commit()
    con.close()

def insert_user(name, email, business_name):
    con = sqlite3.connect(DATABASE)
    try:
        cursor = con.cursor()
        cursor.execute(
            "INSERT INTO Users (name, email, business_name) VALUES (?, ?, ?)", (name, email, business_name))
        con.commit()
    except sqlite3.Error as e:
        print('Error inserting user: ', e)
        return str(e)
    finally:
        con.close()
    return ""


def get_users():
    con = sqlite3.connect(DATABASE)
    cursor = con.cursor()
    cursor.execute(
        "SELECT id, name, email, business_name, submission_date FROM Users")
    rows = cursor.fetchall()
    con.close()
    return rows

