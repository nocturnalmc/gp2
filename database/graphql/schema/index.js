const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Patient {
    _id: ID!
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String
    ic: String,
    tarikhLahir: String,
    umur: Int,
    jantina: String,
    tarikhKedatangan: String,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
    createdAt: String
  }
  type Operator {
    _id: String
    nama: String
    gred: String
    daerah: String
    kpSkrg: String
    role: String
  }
  type Fasiliti {
    _id: String
    nama: String
    negeri: String
    daerah: String
    handler: String
    jenisFasiliti: String
  }
  type facOrPeg {
    _id: ID!
    nama: String
    negeri: String
    daerah: String
    handler: String
    kpSkrg: String
    gred: String
    role: String
  }
  input PatientType {
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String,
    ic: String,
    tarikhLahir: String,
    tarikhKedatangan: String,
    jantina: String,
    umur: Int,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
  }
  input OperatorType {
    nama: String
    gred: String
    daerah: String
    kpSkrg: String
    role: String
  }
  input FasilitiType {
    nama: String
    negeri: String
    daerah: String
    handler: String
    jenisFasiliti: String
  }
  input UpdatePatient{
    _id: String,
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String,
    ic: String,
    tarikhLahir: String,
    tarikhKedatangan: String,
    jantina: String,
    umur: Int,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
  }
  input UpdateFasiliti{
    _id: String,
    nama: String
    negeri: String
    daerah: String
    handler: String
    jenisFasiliti: String
  }
  input UpdateOperator{
    _id: String,
    nama: String
    gred: String
    daerah: String
    kpSkrg: String
    role: String
  }
  type RootQuery {
    klinik(daerah: String): [Fasiliti]
    patient(_id: String!): Patient!
    patients: [Patient]
    operator(_id: String!): Operator!
    operators: [Operator]
    listOperatorByDaerah(daerah: String!): [Operator]
    fasiliti(_id: String!): Fasiliti!
    fasilitis: [Fasiliti]
    fasilitisByType(jenisFasiliti: String!, daerah: String!): [Fasiliti]
    listPatientByTarikhKedatangan(tarikhKedatangan: String!): [Patient!]
    facOrPeg(_id: String!): facOrPeg
  }
  type Mutation {
    createPatient(patient: PatientType): Patient,
    deletePatient(_id: String): Patient,
    updatePatient(patient: UpdatePatient): Patient,
    createOperator(operator: OperatorType): Operator,
    deleteOperator(_id: String): Operator,
    updateOperator(operator: UpdateOperator): Operator,
    createFasiliti(fasiliti: FasilitiType): Fasiliti,
    deleteFasiliti(_id: String): Fasiliti,
    updateFasiliti(fasiliti: UpdateFasiliti): Fasiliti,
    killItWithFire(_id: String!, jenisFasiliti: String!): Fasiliti
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);
