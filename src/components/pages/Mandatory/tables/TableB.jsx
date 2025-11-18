import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SchoolContext } from "../../../../store/school-site-context";

function TableB() {
  const schoolCtx = useContext(SchoolContext);

  const handleEyeClick = (selected) => {
    schoolCtx.setChosenPDFAndName(selected);
  };

  const docs = [
    {
      file: "/affiltation.pdf",
      title:
        "Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation if any",
    },
    {
      file: "/affiltation.pdf",
      title:
        "Copies of Societies / Trust / Company Registration / Renewal Certificate as applicable",
    },
    {
      file: "/affiltation.pdf",
      title:
        "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt. / UT",
    },
    {
      file: "/affiltation.pdf",
      title:
        "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
    },
    {
      file: "/affiltation.pdf",
      title:
        "Copy of valid building safety certificate as per the National Building Code",
    },
    {
      file: "/affiltation.pdf",
      title:
        "Copy of valid fire safety certificate issued by the competent authority",
    },
    {
     file: "/affiltation.pdf",
      title:
        "Copy of the DEO certificate submitted by the school for affiliation / upgradation / extension of affiliation or self-certification by the school",
    },
    {
      file: "/affiltation.pdf",
      title: "Copies of valid water, health, and sanitation certificates",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3">S.No.</th>
            <th className="px-4 py-3">Documents and Information</th>
            <th className="px-4 py-3">Documents</th>
          </tr>
        </thead>

        <tbody>
          {docs.map((doc, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 py-3">{index + 1}</td>

              <td className="px-4 py-3">{doc.title}</td>

              <td className="px-4 py-3">
                <Link to={doc.file}>
                  <FaEye
                    className="cursor-pointer text-blue-600"
                    onClick={() => handleEyeClick([doc.file, doc.title])}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableB;
