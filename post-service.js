import Post from './posts.js';
import FileService from './file-service.js';

class PostService {
	async create(post, picture) {
		const fileName = FileService.saveFile(picture);
		const createdPost = await Post.create({...post, picture: fileName});
		return createdPost;
	}

	async getAll() {
		const posts = await Post.find();
		return posts;
	}

	async getOne(id) {
		if (!id) {
			throw new Error('The ID not found.');
		}
		const post = await Post.findById(id);
		return post;
	}

	async update(post) {
		if (!post._id) {
			throw new Error('The ID not found.');
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
		return updatedPost;
	}

	async delete(id) {
		if (!id) {
			throw new Error('The ID not found.');
		}
		const deletedPost = await Post.findByIdAndDelete(id);
		return deletedPost;
	}

}

export default new PostService();