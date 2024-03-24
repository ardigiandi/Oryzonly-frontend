import bcrypt from "bcrypt";
import mysql from "mysql";

// Konfigurasi koneksi ke database MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "nama_database",
});

// Fungsi untuk melakukan registrasi pengguna
export async function Register(
  userData: {
    name: string;
    email: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  // Periksa apakah email sudah ada dalam database
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [userData.email],
    async (error, results) => {
      if (error) {
        console.error("Error checking email:", error);
        callback(false);
      } else {
        if (results.length > 0) {
          // Email sudah terdaftar
          callback({ status: false });
        } else {
          // Email belum terdaftar, lanjutkan dengan registrasi
          if (!userData.role) {
            userData.role = "member";
          }
          // Hash password sebelum disimpan
          userData.password = await bcrypt.hash(userData.password, 10);
          // Lakukan penambahan data ke dalam database
          connection.query(
            "INSERT INTO users SET ?",
            userData,
            (error, results) => {
              if (error) {
                console.error("Error registering user:", error);
                callback(false);
              } else {
                callback(true);
              }
            }
          );
        }
      }
    }
  );
}
