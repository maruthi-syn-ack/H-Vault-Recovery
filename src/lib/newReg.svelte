<script>
	// UI components
	import { Input, Label, Helper, Button, Checkbox, A, Select } from 'flowbite-svelte';
	// Blockchain components
	import { createPatient } from '/src/connect.js';
	// Database components
	// import { insert } from "/src/dbserver.js";
	// import { insert } from "/src/database.js";

	function pushData() {
		name = fname + lname;
		// pdata.pid,pdata.name,pdata.dob,pdata.bloodgroup,pdata.gender,pdata.origin
		const Pdata = {
			pid: 1,
			name: name,
			dob: dob,
			bloodgroup: blood_selected,
			gender: gender_selected,
			origin: origin
		};
		const DataObj = {
			pid: 1,
			name: name,
			dob: dob,
			bloodgroup: blood_selected,
			origin: origin,
			email: email,
			gender: gender_selected,
			maritialStatus: mstatus_selected,
			phone_number: contactNum
		};
		// insert('patient', DataObj);
		createPatient(Pdata);
	}

	let gender_items = [
		{ value: 'M', name: 'MALE' },
		{ value: 'F', name: 'FEMALE' },
		{ value: 'X', name: 'Others' }
	];
	let blood_items = [
		{ value: 'A+', name: 'A +ve' },
		{ value: 'A-', name: 'A -ve' },
		{ value: 'B+', name: 'B +ve' },
		{ value: 'B-', name: 'B -ve' },
		{ value: 'AB+', name: 'AB +ve' },
		{ value: 'AB-', name: 'AB -ve' },
		{ value: 'O+', name: 'O +ve' },
		{ value: 'O-', name: 'O -ve' }
	];
	let mstat_items = [
		{ value: 'Ma', name: 'Married' },
		{ value: 'Un', name: 'Unmaaried' },
		{ value: 'Div', name: 'Divorced' }
	];
	let name,
		fname,
		lname,
		dob,
		contactNum,
		emailAdrees,
		origin,
		mstatus_selected,
		gender_selected,
		blood_selected;
</script>

<form>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="first_name" class="mb-2">First name</Label>
			<Input type="text" id="first_name" placeholder="John" bind:value={fname} />
		</div>
		<div>
			<Label for="last_name" class="mb-2">Last name</Label>
			<Input type="text" id="last_name" placeholder="Doe" bind:value={lname} />
		</div>
		<div>
			<Label for="company" class="mb-2">DOB</Label>
			<Input type="text" id="company" placeholder="DD/MM/YYY" bind:value={dob} />
		</div>
		<div>
			<Label for="bloodgroup" class="mb-2">Blood group</Label>
			<Select class="mt-2" items={blood_items} bind:value={blood_selected} />
		</div>
		<div>
			<div>
				<Label for="phone" class="mb-2">Phone number</Label>
				<Input type="tel" id="phone" placeholder="123-45-678" bind:value={contactNum} />
			</div>
		</div>
		<div class="mb-6">
			<Label for="mstatus" class="mb-2">Maritial Status</Label>
			<Select class="mt-2" items={mstat_items} bind:value={mstatus_selected} />
		</div>
		<div class="mb-6">
			<Label for="email" class="mb-2">Email address</Label>
			<Input type="email" id="email" placeholder="john.doe@havult.com" bind:value={emailAdrees} />
		</div>
		<div class="mb-6">
			<Label for="gender" class="mb-2">Gender</Label>
			<Select class="mt-2" items={gender_items} bind:value={gender_selected} />
		</div>
		<div>
			<Label for="origin" class="mb-2">Origin</Label>
			<Input type="text" id="origin" placeholder="State your origin" bind:value={origin} />
		</div>

		<Checkbox class="mb-6 space-x-1"
			>I agree with the <A href="/">terms and conditions</A>.</Checkbox
		>
		<Button type="submit" color="primary" on:click={() => pushData()}>Submit</Button>
	</div>
</form>
