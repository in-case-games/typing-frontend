import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFishTextGeneratorService } from '../interfaces/fish-text-generator.interface';

@Injectable()
export class FishTextGeneratorService implements IFishTextGeneratorService {
	constructor(private httpClient: HttpClient) {}

	getFishText(count: number) {
		return this.httpClient.get(`https://fish-text.ru/get?number=${count}`);
	}
}
