import React, { useState } from 'react';

const TableComponent = () => {
    const [formData] = useState({
        applicantName: 'John Doe',
        applicantAddress: '123 Main St',
        mobileNo: '555-5555',
        idolId: 'ID123',
        locationOfIdol: 'Temple',
        dateOfInstallation: '2024-01-01',
        height: '10ft',
        dateOfImmersion: '2024-01-15',
        motherVillage: 'Village A',
        hamletVillage: 'Hamlet B',
        license: 'LIC12345',
        startingPoint: 'Point A',
        placeOfImmersion: 'Riverbank',
        processionRoute: 'Main Street',
        description: 'Festival Description',
        shedDescription: 'Shed Description',
        driverName: 'Jane Smith',
        driverLicense: 'DL12345',
        vehicleType: 'Truck',
        vehicleDescription: 'Large Truck',
        processionBy: 'Group A',
        policePermission: 'Granted',
        fireServicePermission: 'Granted',
        tnebPermission: 'Granted',
        electricalEquipment: 'Generators',
        lightingFacility: 'Street Lights',
        cctvFacility: 'Installed',
        barricade: 'Yes',
        immersionLightingFacility: 'Available',
        safetyMeasuresFireService: 'Fire Extinguishers',
        paSystem: 'Yes',
        volunteers: [
            { no: '1', name: 'Alice', address: '456 Elm St', mobile: '555-1234' },
            { no: '2', name: 'Bob', address: '789 Oak St', mobile: '555-5678' },
            { no: '3', name: 'Charlie', address: '101 Pine St', mobile: '555-8765' },
        ]
    });

    return (
        <div>
            <h2>Applicant & Idol Details</h2>

            <div>
                <img src="https://via.placeholder.com/80" alt="User Icon" />
                <div>
                    <p><strong>Applicant Name:</strong> {formData.applicantName}</p>
                    <p><strong>Applicant Address:</strong> {formData.applicantAddress}</p>
                    <p><strong>Mobile No:</strong> {formData.mobileNo}</p>
                </div>
            </div>

            <div>
                <img src="https://via.placeholder.com/80" alt="Idol Icon" />
                <div>
                    <p><strong>Idol ID:</strong> {formData.idolId}</p>
                    <p><strong>Location of Idol:</strong> {formData.locationOfIdol}</p>
                    <p><strong>Date of Installation:</strong> {formData.dateOfInstallation}</p>
                    <p><strong>Height:</strong> {formData.height}</p>
                    <p><strong>Date of Immersion:</strong> {formData.dateOfImmersion}</p>
                </div>
            </div>

            <div>
                <p><strong>Mother Village:</strong> {formData.motherVillage}</p>
            </div>
            <div>
                <p><strong>Hamlet Village:</strong> {formData.hamletVillage}</p>
            </div>
            <div>
                <p><strong>License:</strong> {formData.license}</p>
            </div>

            <h3>Route</h3>
            <div>
                <p><strong>Starting point:</strong> {formData.startingPoint}</p>
            </div>
            <div>
                <p><strong>Place of Immersion:</strong> {formData.placeOfImmersion}</p>
            </div>
            <div>
                <p><strong>Procession Route:</strong> {formData.processionRoute}</p>
            </div>

            <h3>Place/Properties</h3>
            <div>
                <p><strong>Description:</strong> {formData.description}</p>
            </div>

            <h3>Shed Type</h3>
            <div>
                <p><strong>Description:</strong> {formData.shedDescription}</p>
            </div>

            <h3>Transport</h3>
            <div>
                <p><strong>Driver Name:</strong> {formData.driverName}</p>
            </div>
            <div>
                <p><strong>Driver License:</strong> {formData.driverLicense}</p>
            </div>
            <div>
                <p><strong>Type of Vehicle:</strong> {formData.vehicleType}</p>
            </div>
            <div>
                <p><strong>Description:</strong> {formData.vehicleDescription}</p>
            </div>
            <div>
                <p><strong>Procession By:</strong> {formData.processionBy}</p>
            </div>

            <h3>License/Provisions</h3>
            <div>
                <p><strong>Police Permission:</strong> {formData.policePermission}</p>
            </div>
            <div>
                <p><strong>Fire Service Permission:</strong> {formData.fireServicePermission}</p>
            </div>
            <div>
                <p><strong>TNEB Permission:</strong> {formData.tnebPermission}</p>
            </div>
            <div>
                <p><strong>Electrical Equipment:</strong> {formData.electricalEquipment}</p>
            </div>
            <div>
                <p><strong>Lighting Facility:</strong> {formData.lightingFacility}</p>
            </div>
            <div>
                <p><strong>CCTV Facility:</strong> {formData.cctvFacility}</p>
            </div>

            <h3>Immersion - Safety Measures</h3>
            <div>
                <p><strong>Barricade:</strong> {formData.barricade}</p>
            </div>
            <div>
                <p><strong>Lighting Facility:</strong> {formData.immersionLightingFacility}</p>
            </div>
            <div>
                <p><strong>Safety Measures by Fire Service:</strong> {formData.safetyMeasuresFireService}</p>
            </div>
            <div>
                <p><strong>PA System:</strong> {formData.paSystem}</p>
            </div>

            <h3>Volunteers Details</h3>
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
        </div>
    );
};

export default TableComponent;
