export class User {
	constructor(
		public id: number = null,
		public first_name: string = "",
		public last_name: string = "",
		public email: string = "",
		public password: string = "",
		public address: string = "",
		public unit_number: string = "",
		public city: string = "",
		public state: string = "",
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}
