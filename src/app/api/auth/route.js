import {NextResponse} from "next/server";
import { connection } from "@lib/db"
import { headers } from 'next/headers';



export async function GET(req, res) {

    let results;
    try {
        results = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT user_id, password, dependency_id FROM users WHERE user_id = ?`,
                [7440],
                function (err, results, fields) {
                    if (err) {
                        reject("Error con la busqueda de datos/consulta");
                    }
                    resolve(results);
                }
            );
        });
    } catch (error) {
        console.error("Error con la conexion a la BD");
    }
    console.log(results)
    req.cookies.set("session", {dependency_id:results.dependency_id, user_id: results.user_id})
    return NextResponse.json(results);


};