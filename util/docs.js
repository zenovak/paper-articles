import fs, { read } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { _StringReplaceAll } from './string';

const docsDirectory = join(process.cwd(), 'docs');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}


export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
}


/**
 * gets the markdown file content from filesystem
 * @param {*} filepath string of file path. i.e. "docs/markdown.md"
 * @returns 
 */
export function getDocByPath(filepath) {
  const contents = fs.readFileSync(process.cwd() + filepath, 'utf8');
  return contents
}


/**
 * Returns an array of string document slugs from a directory path. 
 * @example
 * Documents: privacy.md and local.md are located in directory "/legal/".\
 * This function returns:
 * ```
 * getAllDocSlugsByDir("/legal/");
 * // returns ['local', 'privacy']
 * ```
 * @param {*} directoryPath 
 */
export function getAllDocSlugsByDir(directoryPath) {
  const filePaths = fs.readdirSync(process.cwd() + directoryPath);

  const slugs = [];
  for (let index = 0; index < filePaths.length; index++) {
    const path = filePaths[index];
    if (!path.endsWith(".md")) {
      continue;
    }
    slugs.push(path.replace(/\.md$/, ''));

  }
  return slugs
}


/**
 * Retrieves the markdown contents, frontmatter, and slug from a file path
 * @param {*} path path from root of project, i.e. posts/item.md
 * @returns `{metadata: {}, slug: "posts/item", content: ""}`
 * @example
 * ```
 * const data = getMarkdownData("/posts/item.md");
 * // data = {slug: "posts/item", content: "markdown string", metadata: {}}
 * ```
 */
export function getMarkdownData(path) {
  const fileContents = fs.readFileSync(process.cwd() + path, 'utf8');;
  const { data, content } = matter(fileContents);

  return { metadata: data, content, slug: path.replace(/\.md$/, '') }
}


/**
 * Retrieves the markdown contents, frontmatter, and slug based on a markdown file slug from a directory.
 * @param {*} slug slug of the markdown within the directory, example: `"item.md"` or `"item"`.
 * A slug that points to an index file of a parent directory will be represented as 
 * @example
 * ```txt
 * Slug `""` points to "/posts/index.md"
 * Slug `"getting-started"` points to "/posts/getting-started/index.md"
 * ```
 * @param {*} baseDirectory directory example: `"/posts/"`
 * @returns {*} `{slug, content, metadata}`
 * @example
 * ```
 * const data = getMarkdownDataFromSlug("item", "/posts/");
 * // data = {slug: "item", content: "markdown string", metadata: {}}
 * ```
 */
export function getMarkdownDataFromSlug(slug, baseDirectory) {

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(process.cwd() + baseDirectory, realSlug);
  const readPath = `${fullPath}.md`;

  // path as md file exists
  if (fs.existsSync(readPath)) {
    const fileContents = fs.readFileSync(readPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug: realSlug, metadata: data, content };
  }

  // path as md file doesnt exist. is an index file for a branch
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    const fileContents = fs.readFileSync(`${fullPath}/index.md`, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug: realSlug, metadata: data, content };
  }  

  throw Error("Failed to fetch markdown data from slug. Path not exist");
}


/**
 * Retrieves an array of markdown contents, frontmatter, and path slugs from a directory.
 * @param {*} directoryPath directory path containing the markdown files
 * @example "/posts/"
 * @returns {*} `[{slug, content, metadata}, ...]`
 * @example
 * ```
 * const data = getAllMarkdownData("/posts/");
 * // data = {slug: "item", content: "markdown string", metadata: {}}
 * ```
 */
export function getAllMarkdownData(directoryPath) {
  const paths = fs.readdirSync(process.cwd() + directoryPath); // paths = ["item.md", ...]

  const allData = paths.map((path) => {
    const data = getMarkdownDataFromSlug(path, directoryPath);
    return data;
  });
  return allData;
}

/**
 * Returns an array of markdown file paths and slugs from a given directory
 * @param {*} directoryPath 
 * @returns 
 */
export function getMarkdownDirectoryArray(directoryPath) {
  const files = fs.readdirSync(process.cwd() + directoryPath, {recursive: true});
  const validPaths = files.filter((item)=> {
    return item.endsWith(".md");
  });

  const directoryMap = validPaths.map(path => {
    return {
      slug: _StringReplaceAll(path, '\\\\', "/").replace(".md", ""),
      path: path
    }
  });
  return directoryMap;
}