import { Component } from '@angular/core'
import { GalleryImage } from '../misc/types'

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.scss',
})
export class TablesComponent {
    displayCustom: boolean = false

    activeIndex: number = 0

    images: GalleryImage[] = new Array(51)
        .fill(null)
        .map(() => ({ itemImageSrc: '', thumbnailImageSrc: '' }))

    responsiveOptions: any[] = []

    ngOnInit() {
        this.images.forEach((image, index) => {
            image.thumbnailImageSrc = `assets/mosaic/tables/thumbnails/${index}.webp`
            image.itemImageSrc = `assets/mosaic/tables/images/${index}.webp`
        })
    }

    imageClick(index: number) {
        this.activeIndex = index
        this.displayCustom = true
    }
}
