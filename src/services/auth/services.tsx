// Import bcrypt for password hashing
import bcrypt from "bcrypt";

// Import Firebase service functions
import { retriveDataByField, addData } from "@/lib/firebase/service";

// Fungsi utilitas untuk menentukan nama koleksi berdasarkan peran pengguna
function getCollectionName(role?: string) {
    switch (role) {
        case "admin":
            return "admin";  // Jika peran adalah "admin", kembalikan nama koleksi "admin"
        case "mentor":
            return "mentor";  // Jika peran adalah "mentor", kembalikan nama koleksi "mentor"
        default:
            return "users";  // Jika tidak ada peran atau peran lainnya, kembalikan nama koleksi "users"
    }
}

// FUNGSI SIGNUP DAN SIGNIN
export async function signUp(
    userData: {
        fullname: string;
        email: string;
        password: string;
        role?: string;
        created_at?: Date;
        updated_at?: Date;
    },
    callback: Function
) {
    const collection = getCollectionName(userData.role);  // Menentukan nama koleksi berdasarkan peran pengguna
    const data = await retriveDataByField(collection, "email", userData.email);  // Mengambil data pengguna berdasarkan email

    if (data.length > 0) {
        callback(false);  // Jika email sudah ada, panggil callback dengan argumen false
    } else {
        if (!userData.role) {
            userData.role = "murid";  // Default role adalah "murid" jika tidak ada peran yang diberikan
        }
        userData.password = await bcrypt.hash(userData.password, 10);  // Hashing password dengan bcrypt
        userData.created_at = new Date();  // Menetapkan waktu pembuatan
        userData.updated_at = new Date();  // Menetapkan waktu pembaruan
        addData(collection, userData, (result: boolean) => {
            callback(result);  // Menambahkan data ke koleksi dan memanggil callback dengan hasilnya
        });
    }
}

export async function signIn(email: string, role?: string) {
    const collection = getCollectionName(role);  // Menentukan nama koleksi berdasarkan peran pengguna
    const data = await retriveDataByField(collection, "email", email);  // Mengambil data pengguna berdasarkan email

    if (data.length > 0) {
        return data[0];  // Jika data ditemukan, kembalikan data pengguna pertama
    } else {
        return null;  // Jika tidak ditemukan, kembalikan null
    }
}

export async function loginWithGoogle(data: {
    email: string,
    role?: string,
    password?: string,
    created_at?: Date,
    updated_at?: Date,
}, callback: Function) {
    const collection = getCollectionName(data.role);  // Menentukan nama koleksi berdasarkan peran pengguna
    const user = await retriveDataByField(collection, "email", data.email);  // Mengambil data pengguna berdasarkan email

    if (user.length > 0) {
        callback(user[0]);  // Jika data pengguna sudah ada, panggil callback dengan data pengguna
    } else {
        data.role = data.role || "member";  // Default role adalah "member" jika tidak ada peran yang diberikan
        data.created_at = new Date();  // Menetapkan waktu pembuatan
        data.updated_at = new Date();  // Menetapkan waktu pembaruan
        data.password = '';  // Kosongkan password karena menggunakan Google
        await addData(collection, data, (result: boolean) => {
            if (result) {
                callback(data);  // Menambahkan data ke koleksi dan memanggil callback dengan data pengguna
            }
        });
    }
}
