import { Document, Packer, Paragraph, TextRun } from "docx";
import FileSaver from "file-saver";

export const generateFamilyInfo = (family) => {
  const doc = new Document({
    creator: "SencyCry",
    title: "Досьє",
  });

  doc.addSection({
    children: [
      new Paragraph({
        children: [new TextRun(`Досьє на сім'ю ${family.surname}`)],
      }),
      ...createDescriptionOfPersons(family),
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    FileSaver.saveAs(blob, `${family.surname}.docx`);
    console.log("Document created successfully");
  });
};

const createDescriptionOfPersons = (family) => {
  return family.persons.map((person) => {
    return new Paragraph({
      children: [
        new TextRun(
          `${person.surname} ${person.firstName} ${person.LastName} проживає за адресою ${family.address}. Номер телефону: ${person.phoneNumber}`
        ),
      ],
    });
  });
};
