const Post = require('../models/Post');

class PostController {
  async index(req, res) {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async store(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ message: 'Dados incompletos.' });
      }

      const post = await Post.create(req.body);
      return res.status(200).json(post);
    } catch (e) {
      console.error(e);
      return res.status(400).json(e);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: ['ID inválido.'] });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return res
          .status(400)
          .json({ message: ['Esta publicação não existe.'] });
      }

      return res.status(200).json(post);
    } catch (e) {
      return res.status(500).json({ message: ['Erro interno no servidor'] });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: ['ID inválido.'] });
      }

      const post = await Post.findByPk(id);

      if (!post) {
        return res
          .status(400)
          .json({ message: ['Esta publicação não existe.'] });
      }

      const postAtualizado = await post.update(req.body);
      return res.status(200).json(postAtualizado);
    } catch (e) {
      return res.status(500).json({ message: ['Erro interno no servidor'] });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      console.log(id);

      if (!id) {
        return res.status(400).json({ message: ['ID inválido.'] });
      }

      const post = await Post.findByPk(id);
      if (!post) {
        return res
          .status(400)
          .json({ message: ['Esta publicação não existe.'] });
      }

      await post.destroy();
      return res.status(200).json({ message: 'Post deletado.' });
    } catch (e) {
      return res.status(500).json({ message: ['Erro interno no servidor'] });
    }
  }
}

module.exports = new PostController();
