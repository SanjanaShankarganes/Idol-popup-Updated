import React, { useState } from 'react';

const TableComponent = () => {
    const [formData] = useState({
        applicantName: 'John Doe',
        applicantAddress: '123 Main St',
        mobileNo: '555-5555',
        idolId: 'ID123',
        stationName:'Tiruchengode Station',
        locationOfIdol: 'Temple',
        dateOfInstallation: '2024-01-01',
        height: '10ft',
        dateOfImmersion: '2024-01-15',
        motherVillage: 'Village A',
        hamletVillage: 'Hamlet B',
        license: 'LIC12345',
        
        place: [
            { type: 'private', description: 'This is private property belongs to XXX' },
        ],
        shed: [
            { type: 'flammable', description: 'This is private property belongs to XXX' },
        ],
        permissions: [
            { 
                policePermission: 'Granted', 
                fireServicePermission: 'Granted', 
                tnebPermission: 'Granted',  
                electricalEquipment: 'Generators', 
                lightingFacility: 'Street Lights', 
                cctvFacility: 'Installed'
            },
        ],
        volunteers: [
            { no: '1', name: 'Alice', address: '456 Elm St', mobile: '555-1234' },
            { no: '2', name: 'Bob', address: '789 Oak St', mobile: '555-5678' },
            { no: '3', name: 'Charlie', address: '101 Pine St', mobile: '555-8765' },
        ],
        immersion: [
            { 
                barricade: 'Yes', 
                immersionLightingFacility: 'Available', 
                safetyMeasuresFireService: 'Fire Extinguishers', 
                paSystem: 'Yes'
            },
        ],
        transport: [
            { 
                driverName: 'Jane Smith', 
                driverLicense: 'DL12345', 
                vehicleType: 'Truck', 
                vehicleDescription: 'Large Truck', 
                processionBy: 'Group A'
            }
        ],
        route: [
            { 
                startingPoint: 'Point A', 
                defaultJunction: 'Junction X', 
                intermediateJunctions: ['Junction Y', 'Junction Z'], 
                placeOfImmersion: 'Riverbank'
            }
        ],
        sensitivity: [
            { 
                routeSensitivity: 'Sensitive', 
                mosqueSensitivity: 'Yes', 
            }
        ],
    });

    return (
        <div>
            <h2>Applicant & Idol Details</h2>

            <div>
                <h2>Applicant Details</h2>
                <img src="https://via.placeholder.com/80" alt="User Icon" />
                <div>
                    <p><strong>Name:</strong> {formData.applicantName}</p>
                    <p><strong>Address:</strong> {formData.applicantAddress}</p>
                    <p><strong>Mobile No:</strong> {formData.mobileNo}</p>
                </div>
            </div>

            <div>
                <h2>Idol Details</h2>
                <img src="https://via.placeholder.com/80" alt="Idol Icon" />
                <div>
                    <p><strong>Idol ID:</strong> {formData.idolId}</p>
                    <p><strong>Station Name:</strong> {formData.stationName}</p>
                    <p><strong>Mother Village:</strong> {formData.motherVillage}</p>
                    <p><strong>Hamlet Village:</strong> {formData.hamletVillage}</p>
                    <p><strong>Location of Idol:</strong> {formData.locationOfIdol}</p>
                </div>
            </div>
            <div>
            <p><strong>Date of Installation:</strong> {formData.dateOfInstallation}</p>
            </div>
            <div>
            <p><strong>Height:</strong> {formData.height}</p>
            </div>
            <div>
            <p><strong>Date of Immersion:</strong> {formData.dateOfImmersion}</p>
            </div>

            <div>
                <h3>Place/Properties</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.place.map((item, index) => (
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Shed Type</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.shed.map((item, index) => (
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>License/Permissions/Facility</h3>
                <table>
                    <thead>
                        <tr>
                            <th>License</th>
                            <th>Police Permission</th>
                            <th>Fire Service Permission</th>
                            <th>TNEB Permission</th>
                            <th>Electrical Equipment</th>
                            <th>Lighting Facility</th>
                            <th>CCTV Facility</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.permissions.map((item, index) => (
                            <tr key={index}>
                                <td>{formData.license}</td>
                                <td>{item.policePermission}</td>
                                <td>{item.fireServicePermission}</td>
                                <td>{item.tnebPermission}</td>
                                <td>{item.electricalEquipment}</td>
                                <td>{item.lightingFacility}</td>
                                <td>{item.cctvFacility}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Volunteer Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Volunteer No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.volunteers.map((volunteer, index) => (
                            <tr key={index}>
                                <td>{volunteer.no}</td>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.address}</td>
                                <td>{volunteer.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Transportation Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Driver Name</th>
                            <th>Driver License</th>
                            <th>Vehicle Type</th>
                            <th>Vehicle Description</th>
                            <th>Procession By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.transport.map((item, index) => (
                            <tr key={index}>
                                <td>{item.driverName}</td>
                                <td>{item.driverLicense}</td>
                                <td>{item.vehicleType}</td>
                                <td>{item.vehicleDescription}</td>
                                <td>{item.processionBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Sensitivity </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Route Sensitivity</th>
                            <th>Presence of Mosque/Church in Procession Route</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.sensitivity.map((item, index) => (
                            <tr key={index}>
                                <td>{item.routeSensitivity}</td>
                                <td>{item.mosqueSensitivity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Route </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Starting Point</th>
                            <th>Default Junction</th>
                            <th>Intermediate Junctions</th>
                            <th>Place of Immersion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.route.map((item, index) => (
                            <tr key={index}>
                                <td>{item.startingPoint}</td>
                                <td>{item.defaultJunction}</td> {/* Display Default Junction */}
                                <td>
                                    {item.intermediateJunctions.join(' - ')} {/* Display Intermediate Junctions with hyphens */}
                                </td>
                                <td>{item.placeOfImmersion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Immersion-Safety Measures</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Barricade</th>
                            <th>Lighting Facility</th>
                            <th>Safety Measures by  Fire Service</th>
                            <th>PA System</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.immersion.map((item, index) => (
                            <tr key={index}>
                                <td>{item.barricade}</td>
                                <td>{item.immersionLightingFacility}</td>
                                <td>{item.safetyMeasuresFireService}</td>
                                <td>{item.paSystem}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;
