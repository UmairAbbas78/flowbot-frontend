import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios"; // ✅ use your custom axios instance

// Async thunk to fetch all projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/demo/"); // <- now goes to http://localhost:5000/api/
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch projects"
      );
    }
  }
);

// Async thunk to fetch a project by ID
export const fetchProjectById = createAsyncThunk(
  "projects/fetchProjectById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get(`/demo/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch project");
    }
  }
);

// your slice below remains the same...


const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    single: null,
    status: "idle",
    singleStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // all projects
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // single project
      .addCase(fetchProjectById.pending, (state) => {
        state.singleStatus = "loading";
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.singleStatus = "succeeded";
        state.single = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.singleStatus = "failed";
        state.error = action.payload;
      });
  },
});
export default projectSlice.reducer;
