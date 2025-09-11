SELECT u.id, u.name, COUNT(p.id) as "postCount"
FROM "User" u
LEFT JOIN "Post" p ON u.id = p."authorId"
GROUP BY u.id, u.name

-- @param {Int} $1:minAge
-- @param {Int} $2:maxAge
SELECT id, name, age
FROM users
WHERE age > $1 AND age < $2