const { Jimp } = require('jimp');

async function inspect() {
    const img = await Jimp.read('images/logo_raw.png');
    console.log('Image dimensions:', img.width, 'x', img.height);
    
    // Sample a few pixels from the corners and center
    const corners = [
        { x: 0, y: 0 },
        { x: img.width - 1, y: 0 },
        { x: 0, y: img.height - 1 },
        { x: img.width - 1, y: img.height - 1 },
        { x: Math.floor(img.width / 2), y: Math.floor(img.height / 2) }
    ];
    
    corners.forEach(p => {
        const hex = img.getPixelColor(p.x, p.y).toString(16).padStart(8, '0');
        console.log(`Pixel at (${p.x}, ${p.y}): #${hex}`);
    });
}

inspect().catch(console.error);
