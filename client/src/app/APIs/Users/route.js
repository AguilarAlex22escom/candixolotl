import { pool } from "@/Libs/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    let { first_names, last_names, birth_date, user_name, email, psw } =
      await req.json();
    let result = await pool.query("INSERT INTO users SET ?", {
      first_names,
      last_names,
      birth_date,
      user_name,
      email,
      psw,
    });
    console.log(result);
    return NextResponse.json({id: result.insertId, first_names, last_names, birth_date, user_name, email, psw});
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
  /* try {

    await pool.query(
      "INSERT INTO users (first_names, last_names, birth_date, user_name, email, psw) VALUES ?",
      {
        firstNames,
        lastNames,
        birthDate,
        userName,
        email,
        password,
      }
    );
    console.log({
      firstNames,
      lastNames,
      birthDate,
      userName,
      email,
      password,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  } */
};
