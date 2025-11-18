export default function TableE() {
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
            <td className="px-4 py-2 border">
              Total Campus Area of the School (in square meters)
            </td>
            <td className="px-4 py-2 border">9004</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">2</td>
            <td className="px-4 py-2 border">
              No. and Size of the Classrooms (in square feet / meters)
            </td>
            <td className="px-4 py-2 border">17 & 46</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">3</td>
            <td className="px-4 py-2 border">
              No. and Size of Laboratories Including Computer Labs (in square
              feet / meters)
            </td>
            <td className="px-4 py-2 border">6 & 56</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">4</td>
            <td className="px-4 py-2 border">Internet Facility</td>
            <td className="px-4 py-2 border">Yes</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">5</td>
            <td className="px-4 py-2 border">No. of Girls Toilets</td>
            <td className="px-4 py-2 border">6</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">6</td>
            <td className="px-4 py-2 border">No. of Boys Toilets</td>
            <td className="px-4 py-2 border">6</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">7</td>
            <td className="px-4 py-2 border">
              Link to Audit Report of the School Infrastructure
            </td>
            <td className="px-4 py-2 border">
              {/* Uncomment when you add a real link */}
              {/* 
              <a
                href="YOUR-LINK-HERE"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Click To View
              </a> 
              */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
