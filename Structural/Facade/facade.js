//Facade Class
var VideoFacadeConvertor = /** @class */ (function () {
    function VideoFacadeConvertor() {
    }
    VideoFacadeConvertor.prototype.convert = function (filename, format) {
        var videoFile = new VideoFile(filename, format);
        var sourceCodec = CodecExtractor.extractor(videoFile.getSourceFormat());
        var destCodec = CodecExtractor.extractor(videoFile.getDestFormat());
        var finalConvertor = new FinalConvertor();
        finalConvertor.getConversion(sourceCodec, destCodec, filename, format);
    };
    return VideoFacadeConvertor;
}());
//Internal Implementation
var FinalConvertor = /** @class */ (function () {
    function FinalConvertor() {
    }
    FinalConvertor.prototype.getConversion = function (src, dest, file, format) {
        console.log('Conversion started for file= ', file);
        console.log('Mxing...Codec...Audio...');
        if (dest === 'MP4EG-Codec') {
            console.log('Converting to MP4 format');
        }
        else if (dest === 'MP3-Codec') {
            console.log('Converting to MP3 format');
        }
        console.log('Conversion Done :)');
        console.log('Returning final output= ', file.split('.')[0] + '.' + format);
    };
    return FinalConvertor;
}());
var VideoFile = /** @class */ (function () {
    function VideoFile(fname, format) {
        this.filename = fname;
        this.sourceFormat = fname.split('.')[1];
        this.destFormat = format;
    }
    VideoFile.prototype.getSourceFormat = function () {
        return this.sourceFormat;
    };
    VideoFile.prototype.getDestFormat = function () {
        return this.destFormat;
    };
    return VideoFile;
}());
var CodecExtractor = /** @class */ (function () {
    function CodecExtractor() {
    }
    CodecExtractor.extractor = function (format) {
        if (format === 'mp4') {
            return 'MP4EG-Codec';
        }
        else if (format === 'mp3') {
            return 'MP3-Codec';
        }
        return '';
    };
    return CodecExtractor;
}());
//Client/User side code
var convertor = new VideoFacadeConvertor();
convertor.convert('demo.mp3', 'mp4');
