import React from "react";

const UserForm = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="welcomeForm d-flex flex-column gap-4  ">
      <input
        defaultValue=""
        placeholder="Adınızı daxil edin."
        {...register("name", { required: true })}
      />
      <input
        defaultValue=""
        placeholder="Soyadınızı daxil edin."
        {...register("surname", { required: true })}
      />
      <input
        defaultValue=""
        type="number"
        placeholder="ID-nizi daxil edin."
        {...register("userID", {
          required: true,
          minLength: 6,
          maxLength: 6,
        })}
      />
      {errors.exampleRequired && (
        <p>Zəhmət olmasa məlumatları tam şəkildə daxil edin.</p>
      )}

      <input type="submit" value="Çata başlamaq üçün click edin." />
    </form>
  );
};

export default UserForm;
