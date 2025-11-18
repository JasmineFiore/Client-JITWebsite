function TableA() {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        {/* Header */}
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-semibold border-r border-blue-500">
              Information
            </th>
            <th className="px-4 py-3 text-left font-semibold">Details</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">Name of the College</td>
            <td className="px-4 py-3">Jahangirabad Institute of Technology</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">Affiliation Number</td>
            <td className="px-4 py-3">-</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">College Code</td>
            <td className="px-4 py-3">545</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">Complete Address with Pincode</td>
            <td className="px-4 py-3">
              Jahangirabad Educational Trust Group Of Institutions, X6RP+CJP,
              Fort, Jahangeerabad, Uttar Pradesh 225203
            </td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">Director Name</td>
            <td className="px-4 py-3">Maj. Gen. Vikas Saini, SM, VSM</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">Qualification</td>
            <td className="px-4 py-3">M.A, B.Ed</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-4 py-3">College Email ID</td>
            <td className="px-4 py-3">info@jit.edu.in</td>
          </tr>

          <tr className="hover:bg-gray-100 transition">
            <td className="px-4 py-3">Contact Details Number</td>
            <td className="px-4 py-3">+91 73111 94686</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableA;
