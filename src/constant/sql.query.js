export const GET_ALL_USER = `SELECT u.id, u.name as user_name, u.email, u.phone,
g.id as group_id, g.name as group_name
FROM users u
LEFT JOIN shop.groups g
ON u.group_id = g.id`;

export const GET_ALL_GROUP = `SELECT * FROM shop.groups`;
