"use client";
import { useRouter } from "next/navigation";
import useFormStore from "@/components/useFormStore"; // adapte le chemin si nécessaire
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const name = useFormStore((state) => state.name);
  const number = useFormStore((state) => state.number);
  const address = useFormStore((state) => state.address);

  const setName = useFormStore((state) => state.setName);
  const setNumber = useFormStore((state) => state.setNumber);
  const setAddress = useFormStore((state) => state.setAddress);
  const validate = useFormStore((state) => state.validate);

  const [errors, setErrors] = useState([]);

  const handleSubmit = () => {
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Tout est OK, redirection vers la page de confirmation
    router.push("/chocolatedream/form/confirmation");
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center">
        <img src="../LOGO.svg" className="w-[80%] h-[100px]" alt="LogoPage" />
        <p className="italianno-regular mb-5 text-[#7B3F00] text-2xl">
          Natural Rhythm In Every Bite
        </p>
      </div>

      <div className="w-fit ml-7 md:mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Information</h1>

        {/* Affichage des erreurs */}
        {errors.length > 0 && (
          <div className="mb-3 text-red-600">
            {errors.map((err, i) => (
              <p key={i}>{err}</p>
            ))}
          </div>
        )}

        {/* Champs du formulaire */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-25 pl-3 text-black"
        />

        <input
          type="text"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-25 pl-3 text-black"
        />

        <select
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-21 pl-3 text-black"
        >
          <option value="">Sélectionnez votre wilaya</option>
          <option value="Adrar">Adrar</option>
          <option value="Chlef">Chlef</option>
          <option value="Laghouat">Laghouat</option>
          <option value="Oum El Bouaghi">Oum El Bouaghi</option>
          <option value="Batna">Batna</option>
          <option value="Béjaïa">Béjaïa</option>
          <option value="Biskra">Biskra</option>
          <option value="Béchar">Béchar</option>
          <option value="Blida">Blida</option>
          <option value="Bouira">Bouira</option>
          <option value="Tamanrasset">Tamanrasset</option>
          <option value="Tébessa">Tébessa</option>
          <option value="Tlemcen">Tlemcen</option>
          <option value="Tiaret">Tiaret</option>
          <option value="Tizi Ouzou">Tizi Ouzou</option>
          <option value="Alger">Alger</option>
          <option value="Djelfa">Djelfa</option>
          <option value="Jijel">Jijel</option>
          <option value="Sétif">Sétif</option>
          <option value="Saïda">Saïda</option>
          <option value="Skikda">Skikda</option>
          <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
          <option value="Annaba">Annaba</option>
          <option value="Guelma">Guelma</option>
          <option value="Constantine">Constantine</option>
          <option value="Médéa">Médéa</option>
          <option value="Mostaganem">Mostaganem</option>
          <option value="M'Sila">M'Sila</option>
          <option value="Mascara">Mascara</option>
          <option value="Ouargla">Ouargla</option>
          <option value="Oran">Oran</option>
          <option value="El Bayadh">El Bayadh</option>
          <option value="Illizi">Illizi</option>
          <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
          <option value="Boumerdès">Boumerdès</option>
          <option value="El Tarf">El Tarf</option>
          <option value="Tindouf">Tindouf</option>
          <option value="Tissemsilt">Tissemsilt</option>
          <option value="El Oued">El Oued</option>
          <option value="Khenchela">Khenchela</option>
          <option value="Souk Ahras">Souk Ahras</option>
          <option value="Tipaza">Tipaza</option>
          <option value="Mila">Mila</option>
          <option value="Aïn Defla">Aïn Defla</option>
          <option value="Naâma">Naâma</option>
          <option value="Aïn Témouchent">Aïn Témouchent</option>
          <option value="Ghardaïa">Ghardaïa</option>
          <option value="Relizane">Relizane</option>
          <option value="Timimoun">Timimoun</option>
          <option value="Bordj Badji Mokhtar">Bordj Badji Mokhtar</option>
          <option value="Ouled Djellal">Ouled Djellal</option>
          <option value="Béni Abbès">Béni Abbès</option>
          <option value="In Salah">In Salah</option>
          <option value="In Guezzam">In Guezzam</option>
          <option value="Touggourt">Touggourt</option>
          <option value="Djanet">Djanet</option>
          <option value="El M'Ghair">El M'Ghair</option>
          <option value="El Meniaa">El Meniaa</option>
        </select>

        <button
          className="rounded-md hover:bg-[#7b40009c] cursor-pointer border py-0.5 px-10 bg-[#7B3F0078]"
          onClick={handleSubmit}
        >
          Valid
        </button>
      </div>
    </div>
  );
};

export default Page;
