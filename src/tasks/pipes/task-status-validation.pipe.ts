import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipe implements PipeTransform {
	readonly allowedStatuses = [
		TaskStatus.OPEN,
		TaskStatus.DONE,
		TaskStatus.IN_PROGRESS
	];

	transform(value: any): any {
		value = value.toUpperCase();

		if (!this.isStatusValid(value)) {
			throw new BadRequestException(`${value} is an invalid status`);
		}

		return value;
	}

	private isStatusValid(status: any) {
		const idx = this.allowedStatuses.indexOf(status);

		return idx !== -1;
	}
}