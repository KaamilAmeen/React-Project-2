USE COMPANY;
CREATE TABLE Locations (
    location_id INT PRIMARY KEY AUTO_INCREMENT,
    location_name VARCHAR(100) NOT NULL
);
INSERT INTO Locations (location_name) VALUES
('Bangalore'), ('Chennai'), ('Hyderabad'), ('Mumbai'), ('Delhi');
SELECT * FROM Locations;