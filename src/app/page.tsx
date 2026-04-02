export default function Home() {
  return (
    <main className="min-h-screen mx-auto bg-gray-50 flex flex-col items-center p-10">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          ⚡ API Documentation
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Welcome to our API service. Below you can find all available
          endpoints, their methods, and example request/response structures. Use
          these endpoints from your frontend apps (Vue, React, Angular) or API
          clients like Postman.
        </p>
       { process.env.NEXT_PUBLIC_CLIENT_URL&&<p className="text-black hover:underline hover:text-green-500 text-center transition-all duration-300 text-lg">
{process.env.NEXT_PUBLIC_CLIENT_URL}
        </p>}

        {/* Section: Login */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            🔐 Login
          </h2>
          <div className="bg-white rounded-lg shadow p-5 border">
            <p className="mb-2 text-gray-700">
              Authenticate user with{" "}
              <code className="bg-gray-100 px-1">username</code>
              and <code className="bg-gray-100 px-1">password</code>.
            </p>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
              {`POST /api/login
Body:
{
  "username": "user1",
  "password": "123"
}

Response:
{
  "username": "user1",
  "role": "user"
}`}
            </pre>
          </div>
        </section>

        {/* Section: Products */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            📦 Products
          </h2>
          <div className="bg-white rounded-lg shadow p-5 border">
            <p className="mb-2 text-gray-700">
              Get product list. Requires{" "}
              <code className="bg-gray-100 px-1">role</code> header.
            </p>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
              {`GET /api/products
Headers:
  role: mentor | admin | meneger

Response (mentor):
{
  "products": [{ "id":1, "name":"Laptop", "price":1200 }],
  "stats": { "total": 3, "averagePrice": 866 }
}

Response (admin/meneger):
{
  "products": [...full list...],
  "stats": { "total": 3, "averagePrice": 866 }
}`}
            </pre>
          </div>
        </section>

        {/* Section: Depts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            ⚡ Depts
          </h2>
          <div className="bg-white rounded-lg shadow p-5 border space-y-5">
            <div>
              <h3 className="font-medium">Get all depts</h3>
              <pre className="bg-gray-900 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
                {`GET /api/depts
Response:
[
  { "id":"id-1a2b", "user":"Alice", "electricCode":"E1001", "depstAmount":250 },
  ...
]`}
              </pre>
            </div>
            <div>
              <h3 className="font-medium">Get dept by code/id</h3>
              <pre className="bg-gray-900 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
                {`GET /api/depts/:code
Example: /api/depts/E1003
Response:
{ "id":"id-7g8k", "user":"Charlie", "electricCode":"E1003", "depstAmount":120 }`}
              </pre>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} · Custom API with Next.js
        </footer>
      </div>
    </main>
  );
}
