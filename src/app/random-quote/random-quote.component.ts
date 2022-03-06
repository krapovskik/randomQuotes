import { Component, OnInit } from '@angular/core';
import { delay, map, mergeMap, Subject, } from 'rxjs';
import { IQuote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
    selector: 'app-random-quote',
    templateUrl: './random-quote.component.html',
    styleUrls: ['./random-quote.component.css'],
})
export class RandomQuoteComponent implements OnInit {
    quote: IQuote | undefined;
    generate = new Subject<boolean>();
    loading = true;

    constructor(private service: QuoteService) { }

    ngOnInit(): void {
        this.generate.pipe(
            delay(500),
            mergeMap(() =>
                this.service
                    .getQoutes()
                    .pipe(
                        map((data) => {
                            return data[Math.floor(Math.random() * data.length)];
                        })
                    )
            )
        )
            .subscribe({
                next: (data) => {
                    if (data.author)
                        this.quote = data;
                    else
                        this.quote = { text: data.text, author: "Unknown" }
                    this.loading = false
                },
            });
        this.generate.next(true);
    }

    randomNum() {
        return Math.floor(Math.random() * 255);
    }

    onGenerate(div: HTMLDivElement) {
        div.style.backgroundColor = `rgb(${this.randomNum()}, ${this.randomNum()}, ${this.randomNum()})`
        this.loading = true;
        this.generate.next(true);
    }
}
