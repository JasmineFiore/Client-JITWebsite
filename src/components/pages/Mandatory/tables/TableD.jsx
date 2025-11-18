export default function TableD() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-2 border">S.No.</th>
            <th className="px-4 py-2 border">Information</th>
            <th className="px-4 py-2 border">Details</th>
          </tr>
        </thead>

        <tbody className="text-gray-800">
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">Principal</td>
            <td className="px-4 py-2 border">Mr. Naresh Gupta</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">2</td>
            <td className="px-4 py-2 border">Total No. of Teachers</td>
            <td className="px-4 py-2 border">23</td>
          </tr>

          {/* Sub Items */}
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">2a.</td>
            <td className="px-4 py-2 border">PGT</td>
            <td className="px-4 py-2 border">08</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">2b.</td>
            <td className="px-4 py-2 border">TGT</td>
            <td className="px-4 py-2 border">05</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">2c.</td>
            <td className="px-4 py-2 border">PRT</td>
            <td className="px-4 py-2 border">09</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">3</td>
            <td className="px-4 py-2 border">Teachers Section Ratio</td>
            <td className="px-4 py-2 border">1.5:1</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">4</td>
            <td className="px-4 py-2 border">Detail of Special Educator</td>
            <td className="px-4 py-2 border">MR.</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">5</td>
            <td className="px-4 py-2 border">
              Detail of Counsellor and Wellness Teacher
            </td>
            <td className="px-4 py-2 border">MR.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
