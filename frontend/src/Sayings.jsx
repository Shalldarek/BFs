import { useEffect, useState } from "react";
import "./App.css";

const API_URL = `${import.meta.env.VITE_API_URL}/api/funny-sayings`;

function formatCellValue(value) {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return value.toString();
}

function Sayings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadSayings() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = await response.json();

        if (!Array.isArray(json)) {
          throw new Error("Unexpected response format from /funny-sayings");
        }

        setData(json);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadSayings();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className="text-body-secondary">Loading funny sayings...</p>;
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  if (!data.length) {
    return <p className="text-body-secondary">No sayings found.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <section className="card cozy-panel border-0 shadow-sm rounded-5 mt-4 sayings-panel">
      <div className="card-body p-4 p-lg-5">
        <div className="d-flex flex-column gap-2 mb-4">
          <p className="section-kicker mb-0">Funny Sayings</p>
        </div>

        <div className="sayings-table-wrap">
          <div className="table-responsive">
            <table className="table mb-0 sayings-table align-middle">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item._id ?? index}>
                    {columns.map((column) => (
                      <td key={column}>{formatCellValue(item[column])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sayings;