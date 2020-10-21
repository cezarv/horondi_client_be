const LooksImages = require('./home-page-images.model');

const { uploadFiles, deleteFiles } = require('../upload/upload.service');

const {
  IMAGES_WERE_NOT_CONVERTED,
  IMAGE_NOT_FOUND,
} = require('../../error-messages/home-page-messages');

class HomePageImagesService {
  async getHomePageLooksImages() {
    const looksImages = await LooksImages.find();

    if (!looksImages) throw new Error(IMAGE_NOT_FOUND);

    return looksImages;
  }

  async updateHomePageLooksImage(data) {
    const imagesToUpdate = data.id.map(async id => {
      return await LooksImages.findById(id).lean();
    });

    const looksImages = (await Promise.allSettled(imagesToUpdate)).map(
      el => el.value.images
    );

    if (!looksImages) throw new Error(IMAGES_WERE_NOT_CONVERTED);

    return (
      looksImages.length &&
      data.images.length &&
      this.deleteImages(looksImages) &&
      data.id.map((id, i) => this.saveUpdatedLooksImages(id, data.images[i]))
    );
  }

  async uploadImages(data) {
    const uploadResult = await uploadFiles(data);
    const imagesResult = await Promise.allSettled(uploadResult);
    const resizedImages = imagesResult.map(item => item.value.fileNames);

    if (!resizedImages) throw new Error(IMAGES_WERE_NOT_CONVERTED);

    return resizedImages;
  }

  async saveUpdatedLooksImages(id, imageToUpload) {
    const images = await this.uploadImages([imageToUpload]);

    return await LooksImages.findByIdAndUpdate(
      id,
      { images: images[0] },
      {
        new: true,
      }
    );
  }

  async deleteImages(imagesToDelete) {
    const deletedImages = await deleteFiles(imagesToDelete);

    return await Promise.allSettled(deletedImages);
  }
}

module.exports = new HomePageImagesService();
