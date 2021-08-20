//Facade Class
class VideoFacadeConvertor {
  convert(filename: string, format: string) {
      const videoFile = new VideoFile(filename, format);
      const sourceCodec = CodecExtractor.extractor(videoFile.getSourceFormat());
      const destCodec = CodecExtractor.extractor(videoFile.getDestFormat());
      const finalConvertor = new FinalConvertor();
      finalConvertor.getConversion(sourceCodec, destCodec, filename, format);
  }
}

//Internal Implementation ---------
class FinalConvertor {
  getConversion(src:string, dest: string, file: string, format: string) {
      console.log('Conversion started for file= ', file);
      console.log('Mxing...Codec...Audio...');
      if(dest === 'MP4EG-Codec') {
          console.log('Converting to MP4 format');
      } else if(dest === 'MP3-Codec') {
          console.log('Converting to MP3 format');
      }
      console.log('Conversion Done :)');
      console.log('Returning final output= ', file.split('.')[0]+'.'+format);
  }
}


class VideoFile {
  private filename!: string;
  private destFormat!: string;
  private sourceFormat!: string;

  constructor(fname: string, format: string) {
      this.filename = fname;
      this.sourceFormat =  fname.split('.')[1];
      this.destFormat = format;
  }

  getSourceFormat() {
      return this.sourceFormat;
  }
  getDestFormat() {
      return this.destFormat;
  }
}

class CodecExtractor {
  public static extractor(format: string): string {
      if(format === 'mp4') {
          return 'MP4EG-Codec';
      } else if(format === 'mp3'){
          return 'MP3-Codec';
      }
      return '';
  }
}
//-----------------

//Client/User side code
const convertor = new VideoFacadeConvertor();
convertor.convert('demo.mp3', 'mp4');
