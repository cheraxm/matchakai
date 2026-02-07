import React, { useState, useRef } from "react";
import { IoClose, IoImage } from "react-icons/io5";

function AddRecipeModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: "",
        type: "dessert",
        description: "",
        ingredients: "",
        instructions: "",
        cookTime: "",
        servings: "",
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith("image/")) {
                setError("Please select an image file");
                return;
            }
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setError("Image must be less than 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.title.trim()) {
            setError("Recipe title is required");
            return;
        }

        setIsSubmitting(true);
        try {
            // Convert ingredients and instructions to arrays
            const recipeData = {
                ...formData,
                image: imagePreview || "",
                ingredients: formData.ingredients
                    .split("\n")
                    .map((i) => i.trim())
                    .filter(Boolean),
                instructions: formData.instructions
                    .split("\n")
                    .map((i) => i.trim())
                    .filter(Boolean),
                cookTime: parseInt(formData.cookTime) || 0,
                servings: parseInt(formData.servings) || 0,
            };

            await onSubmit(recipeData);

            // Reset form
            setFormData({
                title: "",
                type: "dessert",
                description: "",
                ingredients: "",
                instructions: "",
                cookTime: "",
                servings: "",
            });
            setImagePreview(null);
            onClose();
        } catch (err) {
            setError(err.message || "Failed to add recipe");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({
            title: "",
            type: "dessert",
            description: "",
            ingredients: "",
            instructions: "",
            cookTime: "",
            servings: "",
        });
        setImagePreview(null);
        setError("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-[#FFF4E7] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto mx-4 shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-[#D4C8B8]">
                    <h2 className="text-2xl font-instrument text-[#61371E]">Add New Recipe</h2>
                    <button
                        onClick={handleClose}
                        className="p-1 hover:bg-[#D4C8B8] rounded-full transition"
                    >
                        <IoClose className="w-6 h-6 text-[#61371E]" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    {/* Image Upload Section */}
                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-2">
                            Recipe Image
                        </label>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        {imagePreview ? (
                            <div className="relative w-full h-48 rounded-lg overflow-hidden group">
                                <img
                                    src={imagePreview}
                                    alt="Recipe preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                                    <button
                                        type="button"
                                        onClick={handleImageClick}
                                        className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm hover:bg-gray-100"
                                    >
                                        Change
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="px-3 py-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={handleImageClick}
                                className="w-full h-48 border-2 border-dashed border-[#D4C8B8] rounded-lg flex flex-col items-center justify-center gap-2 hover:border-[#495632] hover:bg-[#495632]/5 transition cursor-pointer"
                            >
                                <IoImage className="w-12 h-12 text-[#9A8C78]" />
                                <span className="text-[#9A8C78]">Click to add image</span>
                                <span className="text-xs text-[#9A8C78]">PNG, JPG up to 5MB</span>
                            </button>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-1">
                            Recipe Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                            placeholder="e.g., Matcha Cheesecake"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-1">
                            Category *
                        </label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                        >
                            <option value="dessert">Dessert</option>
                            <option value="drink">Drink</option>
                            <option value="cooking">Cooking</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={2}
                            className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                            placeholder="Brief description of the recipe"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[#61371E] mb-1">
                                Cook Time (min)
                            </label>
                            <input
                                type="number"
                                name="cookTime"
                                value={formData.cookTime}
                                onChange={handleChange}
                                className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                                placeholder="30"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#61371E] mb-1">
                                Servings
                            </label>
                            <input
                                type="number"
                                name="servings"
                                value={formData.servings}
                                onChange={handleChange}
                                className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                                placeholder="4"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-1">
                            Ingredients (one per line)
                        </label>
                        <textarea
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                            placeholder="2 cups flour&#10;1 tbsp matcha powder&#10;1/2 cup sugar"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#61371E] mb-1">
                            Instructions (one step per line)
                        </label>
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2 border border-[#D4C8B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495632]"
                            placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex-1 py-2 px-4 border border-[#495632] text-[#495632] rounded-full hover:bg-[#495632]/10 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-2 px-4 bg-[#495632] text-white rounded-full hover:brightness-110 transition disabled:opacity-50"
                        >
                            {isSubmitting ? "Adding..." : "Add Recipe"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddRecipeModal;
