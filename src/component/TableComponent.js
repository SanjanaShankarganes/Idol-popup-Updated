import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const TableComponent = () => {
  const [formData] = useState({
    applicantName: "Jon Snow",
    applicantAddress:
      "123 Green Valley Street, Near the Old Pine Tree, Opposite the Small Red House, Hilltop View, Mountainville, 56789.123 Green Valley Street, Near the Old Pine Tree, Opposite the Small Red House, Hilltop View, Mountainville, 56789.",
    mobileNo: "9171019171",
    idolId: "ID123",
    stationName: "Tiruchengode Station",
    locationOfIdol: "Temple",
    dateOfInstallation: "2024-01-01",
    height: "10ft",
    dateOfImmersion: "2024-01-15",
    motherVillage: "Periya pallam Parai",
    hamletVillage: "Ammasipalayam Naicker Street ",
    license: "LIC12345",

    place: [
      {
        type: "private",
        description:
          "Los Angeles, California, known for Hollywood, beaches, diverse culture, entertainment industry, vibrant nightlife, traffic, and sunny weather.",
      },
    ],
    shed: [
      {
        type: "flammable",
        description:
          "Los Angeles itself isn't flammable, but it is prone to wildfires, especially in areas with dry vegetation. The hot, dry climate combined with winds can make surrounding forests and brushlands highly susceptible to fires, which can threaten parts of the city. However, the city's buildings and urban areas are not inherently flammable.",
      },
    ],
    permissions: [
      {
        policePermission: "Granted",
        fireServicePermission: "Granted",
        tnebPermission: "Granted",
        electricalEquipment: "Generators",
        lightingFacility: "Street Lights",
        cctvFacility: "Installed",
      },
    ],
    volunteers: [
      {
        no: "1",
        name: "Alice",
        address:
          "123 Elm Street, Near River Park, Greenfield Heights, Springfield, 12345.",
        mobile: "555-1234",
      },
      {
        no: "2",
        name: "Bob",
        address:
          "45 Maple Lane, Behind Oak Mall, Downtown District, Pinewood, 67890.",
        mobile: "555-5678",
      },
      {
        no: "3",
        name: "Steve harrington",
        address:
          "789 Sunset Boulevard, Next to Central Library, Silver Lake, Metro City, 23456.",
        mobile: "555-8765",
      },
      { no: "4", name: "Arya", address: "789 Oak St", mobile: "555-5658" },
      { no: "5", name: "Rob", address: "101 Pine St", mobile: "555-8765" },
      { no: "6", name: "Stark", address: "789 Oak St", mobile: "555-5478" },
    ],
    immersion: [
      {
        barricade: "Yes",
        immersionLightingFacility: "Available",
        safetyMeasuresFireService: "Fire Extinguishers",
        paSystem: "Yes",
      },
    ],
    transport: [
      {
        driverName: "Jane Smith",
        driverLicense: "DL12345",
        vehicleType: "Truck",
        vehicleDescription:
          "A large, blue ,heavy-duty pickup truck with chrome rims, extended cab, off-road tires, and tinted windows.",
        processionBy: "Group A",
      },
    ],
    route: [
      {
        startingPoint: "Point A",
        defaultJunction: "Junction X",
        intermediateJunctions: [
          "Jean, Nevada",
          "Primm, Nevada",
          "Nipton, California",
          "Baker, California",
          "Kelso, California (via Kelbaker Road)",
          "Barstow, California",
          "Helendale, California",
          "Victorville, California",
          "Hesperia",
          "California",
          "Zzyzx Road, California",
        ],
        placeOfImmersion: "Riverbank",
      },
    ],
    sensitivity: [
      {
        routeSensitivity: "Sensitive",
        mosqueSensitivity: "Yes",
      },
    ],
  });

  return (
    <div className="idol-form-popup-container">
      <div className="idol-form-popup-box my-5 mx-5 px-5 py-4">
        <p className="h1 text-center mb-5 mt-4 text-success">
          Applicant & Idol Details
        </p>

        <div className="my-4 mt-5">
          <p className="h2 mb-4">Applicant Details</p>
          <div className="idol-form-content-box">
            <img
              src="https://i.pinimg.com/736x/51/e9/c0/51e9c08b279a1a4c59c2b1978d6f114d.jpg"
              className="idol-form-img img-fluid"
              alt="User Icon"
            />
            <div className="idol-form-content-innerbox ms-5">
              <table className="idol-form-content-list-div">
                <tr>
                  <td className="h5 pe-3">Name : </td>
                  <td>{formData.applicantName}</td>
                </tr>
              </table>
              <table className="idol-form-content-list-div my-5">
                <tr>
                  <td className="h5 pe-3">Address:</td>
                  <td> {formData.applicantAddress}</td>
                </tr>
              </table>
              <table className="idol-form-content-list-div">
                <tr>
                  <td className="h5 pe-3">Mobile No : </td>
                  <td> {formData.mobileNo}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="my-4">
          <p className="h2 mb-4">Idol Details</p>
          <div className="idol-form-content-box">
            <img
              className="idol-form-img img-fluid"
              src="https://thumbs.dreamstime.com/b/illustration-lord-ganesha-ganesh-chaturthi-festival-india-banner-poster-greeting-card-illustration-lord-ganesha-280392935.jpg"
              alt="Idol Icon"
            />
            <div className="idol-form-content-innerbox ms-5">
              <table className="idol-form-content-list-div my-2">
                <tr>
                  <td className="h5 pe-3">Idol ID :</td>
                  <td>{formData.idolId}</td>
                </tr>
              </table>
              <table className="idol-form-content-list-div my-2">
                <tr>
                  <td className="h5 pe-3">Station Name : </td>
                  <td> {formData.stationName}</td>
                </tr>
              </table>

              <table className="idol-form-content-list-div my-3">
                <tr>
                  <td className="h5 pe-3">Mother Village : </td>
                  <td>{formData.motherVillage}</td>
                </tr>
              </table>

              <table className="idol-form-content-list-div my-2">
                <tr>
                  <td className="h5 pe-3">Hamlet Village : </td>
                  <td> {formData.hamletVillage}</td>
                </tr>
              </table>
              <table className="idol-form-content-list-div my-2">
                <tr>
                  <td className="h5 pe-3">Location of Idol : </td>
                  <td> {formData.locationOfIdol}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <table className="idol-form-content-innerbox my-3">
          <tr>
            <td className="h5 pe-5">Date of Installation : </td>
            <td>{formData.dateOfInstallation}</td>
          </tr>
        </table>
        <table className="idol-form-content-innerbox my-3">
          <tr>
            <td className="h5 pe-5">Height : </td>
            <td>{formData.height}</td>
          </tr>
        </table>
        <table className="idol-form-content-innerbox my-3">
          <tr>
            <td className="h5 pe-5">Date of Immersion : </td>
            <td> {formData.dateOfImmersion}</td>
          </tr>
        </table>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Place/Properties</p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.place.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Type</td>
                  <td>{item.type}</td>
                </tr>
              ))}
              {formData.place.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">description</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Shed Type</p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.shed.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Type</td>
                  <td>{item.type}</td>
                </tr>
              ))}
              {formData.shed.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Description</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">License/Permissions/Facility</p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">License</td>
                  <td>{formData.license}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Police Permission</td>
                  <td>{item.policePermission}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Fire Service Permission</td>
                  <td>{item.fireServicePermission}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">TNEB Permission</td>
                  <td>{item.tnebPermission}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Electrical Equipment</td>
                  <td>{item.electricalEquipment}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Lighting Facility</td>
                  <td>{item.lightingFacility}</td>
                </tr>
              ))}
              {formData.permissions.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">CCTV Facility</td>
                  <td>{item.cctvFacility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Volunteer Details</p>
          <div className="table-responsive-lg">
            <table className="table table-light table-striped table-bordered my-4">
              <thead>
                <tr className="text-center">
                  <th>Volunteer No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {formData.volunteers.map((volunteer, index) => (
                  <tr key={index} className="text-center">
                    <td>{volunteer.no}</td>
                    <td>{volunteer.name}</td>
                    <td>{volunteer.address}</td>
                    <td>{volunteer.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Transportation Details</p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.transport.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Driver Name</td>
                  <td>{item.driverName}</td>
                </tr>
              ))}
              {formData.transport.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Driver License</td>
                  <td>{item.driverLicense}</td>
                </tr>
              ))}
              {formData.transport.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Vehicle Type</td>
                  <td>{item.vehicleType}</td>
                </tr>
              ))}
              {formData.transport.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Vehicle Description</td>
                  <td>{item.vehicleDescription}</td>
                </tr>
              ))}
              {formData.transport.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Procession By</td>
                  <td>{item.processionBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Sensitivity </p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.sensitivity.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Route Sensitivity</td>
                  <td>{item.routeSensitivity}</td>
                </tr>
              ))}
              {formData.sensitivity.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">
                    Presence of Mosque/Church in Procession Route
                  </td>
                  <td>{item.mosqueSensitivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Route </p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.route.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Starting Point</td>
                  <td>{item.startingPoint}</td>
                </tr>
              ))}
              {formData.route.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Default Junction</td>{" "}
                  <td>{item.defaultJunction}</td>{" "}
                  {/* Display Default Junction */}
                </tr>
              ))}
              {formData.route.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Intermediate Junctions</td>{" "}
                  <td>
                    {item.intermediateJunctions.join(" - ")}{" "}
                    {/* Display Intermediate Junctions with hyphens */}
                  </td>
                </tr>
              ))}
              {formData.route.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Place of Immersion</td>
                  <td>{item.placeOfImmersion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="idol-form-content-table my-5">
          <p className="h2 my-3">Immersion-Safety Measures</p>
          <table className="table table-light table-striped table-bordered my-4">
            <tbody>
              {formData.immersion.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Barricade</td>
                  <td>{item.barricade}</td>
                </tr>
              ))}
              {formData.immersion.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Lighting Facility</td>
                  <td>{item.immersionLightingFacility}</td>
                </tr>
              ))}
              {formData.immersion.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">Safety Measures by Fire Service</td>
                  <td>{item.safetyMeasuresFireService}</td>
                </tr>
              ))}
              {formData.immersion.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="h5">PA System</td>
                  <td>{item.paSystem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="view-form-btn text-center">
          <button className="btn btn-dark py-2 px-4 my-3">
            View Applicant Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
