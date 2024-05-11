import { LessonItemModel } from '../models/lesson-item.model';
import { LessonParamsModel } from '../models/lesson-params.model';
import { TypingWordModel } from '../models/typing-word.model';

export interface IGenerationService {
	GenerateRandomNumber(min: number, max: number): number;
	RandomSelectionWordsByLesson(lesson: LessonItemModel): TypingWordModel[];
	RandomSelectionWordsByCharacters(
		params: LessonParamsModel
	): TypingWordModel[];
	RandomSelectionWordsByCharactersWithFishText(
		lesson: LessonItemModel,
		fishText: string
	): TypingWordModel[];
	GetNormalizationFormFishText(
		lesson: LessonItemModel,
		fishText: string
	): string[];
}
