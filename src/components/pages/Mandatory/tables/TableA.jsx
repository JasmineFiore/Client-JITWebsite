function TableA() {
  return (
    // <div className="overflow-x-auto mt-4">
    //   <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
    //     {/* Header */}
    //     <thead className="bg-blue-600 text-white">
    //       <tr>
    //         <th className="px-4 py-3 text-left font-semibold border-r border-blue-500">
    //           Information
    //         </th>
    //         <th className="px-4 py-3 text-left font-semibold">Details</th>
    //       </tr>
    //     </thead>

    //     {/* Body */}
    //     <tbody>
    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Name of the College</td>
    //         <td className="px-4 py-3">Jahangirabad Institute of Technology</td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Affiliation Number</td>
    //         <td className="px-4 py-3">-</td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">College Code</td>
    //         <td className="px-4 py-3">545</td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Complete Address with Pincode</td>
    //         <td className="px-4 py-3">
    //           Jahangirabad Educational Trust Group Of Institutions, X6RP+CJP,
    //           Fort, Jahangeerabad, Uttar Pradesh 225203
    //         </td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Director Name</td>
    //         <td className="px-4 py-3">Maj. Gen. Vikas Saini, SM, VSM</td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Qualification</td>
    //         <td className="px-4 py-3">M.A, B.Ed</td>
    //       </tr>

    //       <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">College Email ID</td>
    //         <td className="px-4 py-3">info@jit.edu.in</td>
    //       </tr>

    //       <tr className="hover:bg-gray-100 transition">
    //         <td className="px-4 py-3">Contact Details Number</td>
    //         <td className="px-4 py-3">+91 73111 94686</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-400 text-sm">
        <thead>
          {/* <tr className="bg-gray-200 text-center text-xl">
            <th
              className="border border-gray-400 px-4 py-3 font-bold"
              colSpan="4"
            >
              COLLEGE NAME AND CODE OF JIT
            </th>
          </tr> */}
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-800 px-3 py-2">
              Approval / Affiliating Agency
            </th>
            <th className="border border-gray-800 px-3 py-2">Course Name</th>
            <th className="border border-gray-800 px-3 py-2">Institute Name</th>
            <th className="border border-gray-800 px-3 py-2">
              Institute Code / ID
            </th>
          </tr>
        </thead>

        <tbody>
          {/* AICTE */}
          {/* AICTE */}
          <tr>
            <td
              rowSpan="3"
              className="border px-3 py-3 font-semibold text-center align-middle"
            >
              AICTE
            </td>

            <td className="border px-3 py-2">B.Tech</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS
            </td>

            {/* CODE SHOWN ONLY ONCE FOR ALL 3 ROWS */}
            <td
              rowSpan="3"
              className="px-3 py-2 font-semibold text-center align-middle border"
            >
              1-8718336
            </td>
          </tr>

          <tr>
            <td className="border px-3 py-2">MBA</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS
            </td>
          </tr>

          <tr>
            <td className="border px-3 py-2">Diploma Engg.</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS
            </td>
          </tr>

          {/* PCI */}
          <tr>
            <td
              rowSpan="2"
              className="border px-3 py-3 font-semibold text-center align-top"
            >
              PCI
            </td>

            <td className="border px-3 py-2">B.Pharma & D.Pharma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF TECHNOLOGY FACULTY OF PHARMACY
            </td>
            <td className="border px-3 py-2 text-center font-semibold">PCI 3440</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">D.Pharma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF PHARMACY
            </td>
            <td className="border px-3 py-2 text-center font-semibold">PCI-6974</td>
          </tr>

          {/* AKTU */}
          <tr>
            <td
              rowSpan="3"
              className="border px-3 py-3 font-semibold text-center align-top"
            >
              AKTU
            </td>

            <td className="border px-3 py-2">B.Tech</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS FACULTY OF
              ENGG.
            </td>
            <td className="border px-3 py-2 text-center font-semibold">545</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">MBA</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS FACULTY OF
              MANAGEMENT
            </td>
            <td className="border px-3 py-2 text-center font-semibold">599</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">B.Pharma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF TECHNOLOGY FACULTY OF PHARMACY
            </td>
            <td className="border px-3 py-2 text-center font-semibold">1064</td>
          </tr>

          {/* BTE */}
          <tr>
            <td
              rowSpan="3"
              className="border px-3 py-3 font-semibold text-center align-top"
            >
              BTE
            </td>

            <td className="border px-3 py-2">Diploma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS
            </td>
            <td className="border px-3 py-2 text-center font-semibold">2734</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">D.Pharma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF TECHNOLOGY FACULTY OF PHARMACY
            </td>
            <td className="border px-3 py-2 text-center font-semibold">2099</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">D.Pharma</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD SANSTHAN OF PHARMACY
            </td>
            <td className="border px-3 py-2 text-center font-semibold">2574</td>
          </tr>

          {/* Dr. RMLAU */}
          <tr>
            <td className="border px-3 py-3 font-semibold text-center align-top">
              Dr. RMLAU
            </td>

            <td className="border px-3 py-2">BA & B.Com</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD EDUCATIONAL TRUST GROUP OF INSTITUTIONS FACULTY OF
              ARTS
            </td>
            <td className="border px-3 py-2 text-center font-semibold">859</td>
          </tr>

          {/* ITI */}
          <tr>
            <td
              rowSpan="2"
              className="border px-3 py-3 font-semibold text-center align-top"
            >
              ITI
            </td>

            <td className="border px-3 py-2">MIS CODE (NCVT)</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF TECHNOLOGY FOR POLYTECHNIC PRIVATE ITI
            </td>
            <td className="border px-3 py-2 text-center font-semibold">PR09901321</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">ITI CODE (SCVT)</td>
            <td className="border px-3 py-2">
              JAHANGIRABAD INSTITUTE OF TECHNOLOGY FOR POLYTECHNIC PRIVATE ITI
            </td>
            <td className="border px-3 py-2 text-center font-semibold">4044</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableA;
