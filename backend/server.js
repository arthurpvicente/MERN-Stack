import express from "express";
import dotenv from "dotenv";
import path from "path";

// Import database connection
import { connectDB } from "./config/db.js";

// Load environment variables
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data from request body

app.use("/api/products", productRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // Handle client-side routing
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(PORT, () => {
    connectDB();
    console.log("Server started on port http://localhost:" + PORT);
});