import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";

function CreateJournal() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_MB = 10;
    const ALLOWED = ["image/png", "image/jpeg", "image/webp"];
    if (!ALLOWED.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        imageFile: "Only PNG, JPG, WEBP are allowed.",
      }));
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        imageFile: `File must be ≤ ${MAX_MB}MB.`,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, imageFile: file }));
    setImagePreview((oldUrl) => {
      if (oldUrl) URL.revokeObjectURL(oldUrl);
      return URL.createObjectURL(file);
    });
    setErrors((prev) => ({ ...prev, imageFile: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";
    if (!formData.imageFile) newErrors.imageFile = "Cover photo is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    console.log("Submitting Journal Data:", formData);
    alert("Journal created successfully!");
    navigate("/journal");
  };

  const baseField =
    "block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:outline-none";
  const fieldClass = (hasError) =>
    `${baseField} ${
      hasError
        ? "ring-red-500 focus:ring-red-500"
        : "ring-gray-300 focus:ring-[#B5C196]"
    }`;

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;
    handleImageChange({ target: { files: [file] } });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('assets/farmmatcha.jpg')] flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="space-y-10">
            <div className="border-b border-gray-200 pb-10">
              <h2 className="text-4xl font-instrument font-bold leading-9 text-[#6B5A4A] text-center mb-2">
                Create New Journal Entry
              </h2>
              <p className="mt-2 text-lg leading-7 text-gray-600 text-center font-line">
                Share your matcha knowledge and stories with the community.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-y-8">
                {/* Title */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-lg font-line font-medium text-gray-800 mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={fieldClass(!!errors.title)}
                    aria-invalid={!!errors.title}
                    aria-describedby={errors.title ? "title-error" : undefined}
                  />
                  {errors.title && (
                    <p id="title-error" className="mt-1 text-sm text-red-600">
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-lg font-line font-medium text-gray-800 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className={fieldClass(!!errors.description)}
                    aria-invalid={!!errors.description}
                    aria-describedby={
                      errors.description ? "description-error" : undefined
                    }
                  />
                  {errors.description && (
                    <p
                      id="description-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Cover Photo */}
                <div>
                  <label
                    htmlFor="file-upload"
                    className="block text-lg font-line font-medium leading-6 text-gray-800 mb-2"
                  >
                    Cover Photo
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        fileInputRef.current?.click();
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    role="button"
                    tabIndex={0}
                    aria-invalid={!!errors.imageFile}
                    aria-describedby={errors.imageFile ? "image-error" : undefined}
                    className={`mt-2 flex justify-center rounded-lg border border-dashed px-6 py-8 cursor-pointer transition-all
                      focus-within:ring-2 focus-within:ring-inset
                      ${
                        errors.imageFile
                          ? "border-red-500 ring-1 ring-inset ring-red-500 focus-within:ring-red-500"
                          : "border-gray-300 hover:border-[#B5C196] hover:bg-[#F9F7F4] focus-within:ring-[#B5C196]"
                      }`}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-52 object-cover rounded-lg shadow-md"
                      />
                    ) : (
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-16 w-16 text-gray-300"
                          aria-hidden="true"
                        />
                        <p className="mt-4 text-sm leading-6 text-gray-600">
                          <span className="font-semibold text-[#6B5A4A]">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs leading-5 text-gray-500">
                          PNG, JPG, WEBP up to 10MB
                        </p>
                      </div>
                    )}

                    <input
                      ref={fileInputRef}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      accept="image/png, image/jpeg, image/webp"
                    />
                  </div>

                  {errors.imageFile && (
                    <p id="image-error" className="mt-2 text-sm text-red-600">
                      {errors.imageFile}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-x-4">
            <button
              type="button"
              onClick={() => navigate("/journal")}
              className="text-lg font-semibold leading-7 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#495632] px-7 py-3 text-lg font-semibold text-white shadow-md hover:bg-[#617342] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5C196] transition-colors"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJournal;