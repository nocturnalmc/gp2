-- CreateTable
CREATE TABLE "Pesakit" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdByNegeri" VARCHAR(255) NOT NULL,
    "createdByDaerah" VARCHAR(255) NOT NULL,
    "createdByKp" VARCHAR(255) NOT NULL,
    "createdByUsername" VARCHAR(255) NOT NULL,
    "statusRawatan" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jantina" TEXT NOT NULL,
    "umur" INTEGER NOT NULL,
    "namaSekolah" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "ic" TEXT NOT NULL,
    "tarikhLahir" TIMESTAMP(3) NOT NULL,
    "warganegara" TEXT NOT NULL,
    "bangsa" TEXT NOT NULL,
    "darjah" INTEGER NOT NULL,
    "tingkatan" INTEGER NOT NULL,
    "statikBergerak" TEXT NOT NULL,
    "kpBergerak" BOOLEAN NOT NULL DEFAULT false,
    "plateNo" TEXT NOT NULL,
    "baruUlanganKedatanganPendaftaran" TEXT NOT NULL,
    "engganKedatanganPendaftaran" BOOLEAN NOT NULL DEFAULT false,
    "tidakHadirKedatanganPendaftaran" BOOLEAN NOT NULL DEFAULT false,
    "adaTiadaPemeriksaanPendaftaran" TEXT NOT NULL,
    "tinggiRendahRisikoSekolahPendaftaran" TEXT NOT NULL,
    "adaCleftLip" BOOLEAN NOT NULL DEFAULT false,
    "rujukCleftLip" BOOLEAN NOT NULL DEFAULT false,
    "yaTidakSediaAdaStatusDenture" TEXT NOT NULL,
    "separaPenuhAtasSediaAdaDenture" TEXT NOT NULL,
    "separaPenuhBawahSediaAdaDenture" TEXT NOT NULL,
    "yaTidakPerluStatusDenture" TEXT NOT NULL,
    "separaPenuhAtasPerluDenture" TEXT NOT NULL,
    "separaPenuhBawahPerluDenture" TEXT NOT NULL,
    "toothSurfaceLossTrauma" BOOLEAN NOT NULL DEFAULT false,
    "kecederaanGigiAnteriorTrauma" BOOLEAN NOT NULL DEFAULT false,
    "tisuLembutTrauma" BOOLEAN NOT NULL DEFAULT false,
    "tisuKerasTrauma" BOOLEAN NOT NULL DEFAULT false,
    "kebersihanMulutOralHygiene" TEXT NOT NULL,
    "skorBpeOralHygiene" TEXT NOT NULL,
    "saringanKanserMulutOralHygiene" BOOLEAN NOT NULL DEFAULT false,
    "skorGisMulutOralHygiene" TEXT NOT NULL,
    "dAdaGigiDesidus" INTEGER NOT NULL DEFAULT 0,
    "mAdaGigiDesidus" INTEGER NOT NULL DEFAULT 0,
    "fAdaGigiDesidus" INTEGER NOT NULL DEFAULT 0,
    "xAdaGigiDesidus" INTEGER NOT NULL DEFAULT 0,
    "dAdaGigiKekal" INTEGER NOT NULL DEFAULT 0,
    "mAdaGigiKekal" INTEGER NOT NULL DEFAULT 0,
    "fAdaGigiKekal" INTEGER NOT NULL DEFAULT 0,
    "eAdaGigiKekal" INTEGER NOT NULL DEFAULT 0,
    "xAdaGigiKekal" INTEGER NOT NULL DEFAULT 0,
    "jumlahFaktorRisiko" INTEGER NOT NULL DEFAULT 0,
    "gicBilanganFsDibuat3TahunLepas" INTEGER NOT NULL DEFAULT 0,
    "resinBilanganFsDibuat3TahunLepas" INTEGER NOT NULL DEFAULT 0,
    "lainLainBilanganFsDibuat3TahunLepas" INTEGER NOT NULL DEFAULT 0,
    "dBilanganFsDibuat3TahunLepasTerjadi" INTEGER NOT NULL DEFAULT 0,
    "mBilanganFsDibuat3TahunLepasTerjadi" INTEGER NOT NULL DEFAULT 0,
    "fBilanganFsDibuat3TahunLepasTerjadi" INTEGER NOT NULL DEFAULT 0,
    "eBilanganFsDibuat3TahunLepasTerjadi" INTEGER NOT NULL DEFAULT 0,
    "xBilanganFsDibuat3TahunLepasTerjadi" INTEGER NOT NULL DEFAULT 0,
    "classID" INTEGER NOT NULL DEFAULT 0,
    "classIID" INTEGER NOT NULL DEFAULT 0,
    "classIF" INTEGER NOT NULL DEFAULT 0,
    "classIIF" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiKekalPerluFs" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalPerluFs" INTEGER NOT NULL DEFAULT 0,
    "jumlahGigiFsGagal" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiKekalPerluFv" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalPerluFv" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiKekalPerluPrrJenis1" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalPerluPrrJenis1" INTEGER NOT NULL DEFAULT 0,
    "yaTidakSilverDiamineFluoridePerluSapuan" TEXT NOT NULL,
    "baruGDAnteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGDAnteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "baruGKAnteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGKAnteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "baruGDPosteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGDPosteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "baruGKPosteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGKPosteriorSewarnaJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "baruGDPosteriorAmalgamJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGDPosteriorAmalgamJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "baruGKPosteriorAmalgamJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,
    "semulaGKPosteriorAmalgamJumlahTampalanDiperlukan" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pesakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rawatan" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idPesakit" INTEGER NOT NULL,
    "baruJumlahGigiKekalDibuatFs" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalDibuatFs" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiKekalDiberiFv" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalDiberiFv" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiKekalDiberiPrrJenis1" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiKekalDiberiPrrJenis1" INTEGER NOT NULL DEFAULT 0,
    "baruJumlahGigiYangDiberiSdf" INTEGER NOT NULL DEFAULT 0,
    "semulaJumlahGigiYangDiberiSdf" INTEGER NOT NULL DEFAULT 0,
    "gdBaruAnteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gdSemulaAnteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkBaruAnteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkSemulaAnteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gdBaruPosteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gdSemulaPosteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkBaruPosteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkSemulaPosteriorSewarnaJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gdBaruPosteriorAmalgamJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gdSemulaPosteriorAmalgamJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkBaruPosteriorAmalgamJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "gkSemulaPosteriorAmalgamJumlahTampalanDibuat" INTEGER NOT NULL DEFAULT 0,
    "cabutDesidusPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "cabutKekalPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "jumlahTampalanSementaraPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "pulpotomiPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "endodontikPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "absesPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "penskaleranPenyataAkhir2" INTEGER NOT NULL DEFAULT 0,
    "kesSelesaiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "kesSelesaiIcdasPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "rujukPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "ceramahPromosiPenyataAkhir2" TEXT NOT NULL,
    "lmgPromosiPenyataAkhir2" TEXT NOT NULL,
    "yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2" TEXT NOT NULL,
    "plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false,
    "statusM" TEXT NOT NULL,
    "jenisR" TEXT NOT NULL,
    "tarikh1" TEXT NOT NULL,
    "tarikh2" TEXT NOT NULL,
    "tarikh3" TEXT NOT NULL,
    "tarikh4" TEXT NOT NULL,
    "adaQ" BOOLEAN NOT NULL DEFAULT false,
    "tiadaQ" BOOLEAN NOT NULL DEFAULT false,
    "rujukG" BOOLEAN NOT NULL DEFAULT false,
    "tarikhQ" TEXT NOT NULL,
    "statusSelepas6Bulan" TEXT NOT NULL,

    CONSTRAINT "Rawatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rawatan" ADD CONSTRAINT "Rawatan_idPesakit_fkey" FOREIGN KEY ("idPesakit") REFERENCES "Pesakit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
