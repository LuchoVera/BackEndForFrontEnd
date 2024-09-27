CREATE TABLE Users IF NOT EXISTS(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    ProfileImage VARCHAR(255)
);

CREATE TABLE News IF NOT EXISTS(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    Images VARCHAR(255),
    Category VARCHAR(50),
    CreationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
