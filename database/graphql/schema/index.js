const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  """
  A Patient refers to available attributes for a Patient
  """
  type Patient {
    _id: ID!
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
  input PatientType {
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
  type RootQuery {
    patient(_id: String!): Patient!
    patients: [Patient!]
    listPatientByTarikhKedatangan(tarikhKedatangan: String!): [Patient!]
  }
  type Mutation {
    createPatient(patient: PatientType): Patient,
    deletePatient(_id: String): Patient,
    updatePatient(_id: String, body: String): String
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);