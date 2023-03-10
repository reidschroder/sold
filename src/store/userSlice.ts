import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const BASE_URL: string = "http://localhost:5000/data/";

export const login = createAsyncThunk("auth/login", async (payload: any) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/login`, payload);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
});

export const register = createAsyncThunk("auth/register", async (payload: any) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/register`, payload);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
});

export const logout = createAsyncThunk("auth/logout", async (payload: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/logout`, payload);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
});

const initialState = {
    user: {},
    status: "idle"
}

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        getUserFromLocal(state) {
			state.user = JSON.parse(localStorage.getItem("user") || "{}");
		},
		setStatus(state, action) {
			state.status = action.payload;
		},
        handleLogout(state) {
			state.user = {};
			localStorage.setItem("user", "{}");
		},
    },
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = "success";
            })
            .addCase(register.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(login.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(logout.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.status = "idle";
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
});


// export const getUser = (state: any) => state.users.user;

export const { getUserFromLocal, setStatus, handleLogout} = userSlice.actions;

export default userSlice.reducer;