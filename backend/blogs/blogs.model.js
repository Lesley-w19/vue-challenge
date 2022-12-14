const sql = require("_helpers/connection.js");

// constructor
const Blog = function (blog) {
  this.title = blog.title;
  this.description = blog.description;
  this.image = blog.image;
  this.author = blog.author;
  this.published = blog.published;
};

Blog.create = (newBlog, result) => {
  sql.query("INSERT INTO blogs SET ?", newBlog, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }
    // console.log("created Blog: ", { id: res.insertId, ...newBlog });
    result(null, { id: res.insertId, ...newBlog });
  });
};
Blog.findById = (id, result) => {
  sql.query(`SELECT * FROM blogs WHERE id = ${id}`, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      // console.log("found Blog: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Blog with the id
    result({ kind: "not_found" }, null);
  });
};
Blog.getAll = (title, result) => {
  let query = "SELECT * FROM blogs";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("blogs: ", res);
    result(null, res);
  });
};
// Blog.getAllPublished = (result) => {
//   sql.query("SELECT * FROM blogs WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     console.log("blogs: ", res);
//     result(null, res);
//   });
// };
Blog.updateById = (id, blog, result) => {
  console.log(blog);
  sql.query(
    "UPDATE blogs SET title = ?, description = ?, author = ?,image = ?, published = ? WHERE id = ?",
    [blog.title, blog.description, blog.author, blog.image, blog.published, id],
    (err, res) => {
      if (err) {
        // console.log("error: ", err.message);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Blog with the id
        result({ kind: "not_found" }, null);
        return;
      }
      // console.log("updated Blog: ", { id: id, ...blog });
      result(null, { id: id, ...blog });
    }
  );
};
Blog.remove = (id, result) => {
  sql.query("DELETE FROM blogs WHERE id = ?", id, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found blog with the id
      result({ kind: "not_found" }, null);
      return;
    }
    // console.log("deleted blog with id: ", id);
    result(null, res);
  });
};

// Blog.removeAll = (result) => {
//   sql.query("DELETE FROM blogs", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     console.log(`deleted ${res.affectedRows} blogs`);
//     result(null, res);
//   });
// };
module.exports = Blog;
