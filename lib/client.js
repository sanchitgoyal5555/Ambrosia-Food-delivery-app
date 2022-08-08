import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "8x1mhhpf",
    dataset: 'production',
    apiVersion : "2022-08-07",
    useCdn: true,
    token:
    "skBWKXElhkudUozwOFdPYlzegkAmodGM8dDA2qpVKMfJTPVEFSrrIP6bJjSAOQi0kee9IdiWZNhNFaU0hCvQsU5OtXgPtXLokunveoak0iLb0BWEU3WQKdVnriqO6JqobZujYVDWF5kBkatbQknZFwWGsLEIJR6trY3P0fZnN7IjNaZDfUYu"
    
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);