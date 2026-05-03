// ## ORM vs ODM — Points to Remember

// ### ORM (Object Relational Mapping)
// Used with relational databases like MySQL, PostgreSQL.
// Examples: Sequelize, TypeORM, Hibernate

// Key points:
// * Maps tables to classes/objects
// * Works with rows, columns, relationships
// * Supports SQL queries and joins
// * Fixed schema (structured data)
// * Strong support for transactions

// Use when:
// * Data is structured
// * Complex relationships are required
// * Applications like banking or enterprise systems

// ### ODM (Object Document Mapping)
// Used with document databases like MongoDB.
// Example: Mongoose

// Key points:
// * Maps documents to objects
// * Works with collections and JSON-like data
// * Flexible schema
// * Limited or no joins
// * Faster for rapid development

// Use when:
// * Data is unstructured or frequently changing
// * Need flexibility and scalability
// * Applications like social media, content apps

// ## One-line Interview Answer
// “ORM is used to map objects with relational databases using tables and SQL, 
// while ODM is used to map objects with document databases like MongoDB using flexible, JSON-based structures.”

// ## Easy Memory Trick
// ORM → Relational → Tables
// ODM → Document → JSON