import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'Doc');
 
export function getDocument(){
    const fileNames = fs.readdirSync(postDirectory);
    const  allDocsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data ,
        }
    });
    return allDocsData.sort((a, b) => {
        if(a.order < b.order){
            return -1;
        } 
        if(a.order > b.order){
            return 1;
        }
        return 0;
    });
}