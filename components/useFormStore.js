import { create } from "zustand";

const useFormStore = create((set) => ({
	name: "",
	number: "",
	address: "",

	// Actions pour modifier les valeurs
	setName: (value) => set({ name: value }),
	setNumber: (value) => set({ number: value }),
	setAddress: (value) => set({ address: value }),

	// Validation simple
	validate: () => {
		let errors = [];

		// Nom obligatoire
		if (!useFormStore.getState().name.trim()) {
			errors.push("Name is required");
		}

		// Numéro obligatoire et format simple (chiffres seulement)
		const number = useFormStore.getState().number;
		if (!number.trim()) {
			errors.push("Number is required");
		} else if (!/^\d+$/.test(number)) {
			errors.push("Number must be digits only");
		}

		// Adresse obligatoire
		if (!useFormStore.getState().address.trim()) {
			errors.push("Address is required");
		}

		return errors;
	},
}));

export default useFormStore;
